#!/bin/bash
echo "===== Publish current version to gh-pages ====="
echo "*** Prepare environment ***"

# Initialize the environment
REPO_SLUG=${TRAVIS_REPO_SLUG:-beverages-js}
if [ -s "${TRAVIS}" ]; then
	REPO_URL=https://cyChop:$GITHUB_API_KEY@github.com/${REPO_SLUG}.git
else
	REPO_URL=git@github.com:cyChop/beverages-js.git
fi
REPO_PUBLISH_BRANCH=${PUBLISH_BRANCH:-gh-pages}
COMMIT_ID=`git log --format="%H" -n 1`
SCRIPT_PATH=$(readlink -f $0)
BASE_DIR=${TRAVIS_BUILD_DIR:-`dirname "$SCRIPT_PATH"`}
PUBLISH_DIR=${PUBLISH_DIR:-"${BASE_DIR}/gh-pages"}

echo "*** Preparing the sources to deploy ***"

# Remove some data
if [ -s "${PUBLISH_DIR}" -a -s "${PUBLISH_DIR}/.git" ]; then
	rm -rf ${PUBLISH_DIR}/.git
fi

# Update the data with the new files
rsync -az --del "${BASE_DIR}/dist/" "${PUBLISH_DIR}/"
rsync -az --del "${BASE_DIR}/reports/doc/" "${PUBLISH_DIR}/doc/"

# Turn this into a Git repository
echo "*** Get repository information ***"
pushd ${PUBLISH_DIR}
git clone $REPO_URL --branch $REPO_PUBLISH_BRANCH tmp
mv tmp/.git .
rm -rf tmp

# Commit and push changes
echo "*** Commit and push changes ***"
git add --all
if [ -s "${TRAVIS}" ]; then
	echo "This is a travis build"
	git -c user.name='Travis CI' -c user.email='travis' commit -m "Travis build $TRAVIS_BUILD_NUMBER"
else
	echo "This is a local build"
	git commit --no-gpg-sign -m "Local build (based on commit ${COMMIT_ID})"
fi
git push

# We're done
popd
