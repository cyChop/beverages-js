PUBLISH_DIR=${TRAVIS_BUILD_DIR}/gh-pages

publish: checkout buildweb push

checkout:
	git clone https://github.com/${TRAVIS_REPO_SLUG}.git --branch gh-pages "${PUBLISH_DIR}"

buildweb: clean copy

clean:
	shopt -s extglob
	rm -rfv ${PUBLISH_DIR}/!(.git*)
	shopt -u extglob

copy:
	cp -prv "${TRAVIS_BUILD_DIR}/dist" "${PUBLISH_DIR}/"
	cp -pv "${TRAVIS_BUILD_DIR}/index.html" "${PUBLISH_DIR}/"

# Push quietly to avoid displaying the API key in logs
push:
	cd "${PUBLISH_DIR}"
	git add --all
	git -c user.name='Travis CI' -c user.email='travis' commit -m "Travis build ${TRAVIS_BUILD_NUMBER}"
	git push -q https://cyChop:$GITHUB_API_KEY@github.com/${TRAVIS_REPO_SLUG}.git
	cd "${TRAVIS_BUILD_DIR}"
