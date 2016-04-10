publish: checkout buildweb push

checkout:
	git checkout https://github.com/cyChop/teas-js.git gh-pages
	pushd gh-pages

buildweb: clean copy

clean:
	find . ! -name '.git' -type f -exec rm -f {} +

copy:
	cp -pr ../dist ./
	cp -p ../index.html ./

# Push quietly to avoid displaying the API key in logs
push:
	git add --all
	git -c user.name='Travis CI' -c user.email='travis' commit -m "Travis build $TRAVIS_BUILD_NUMBER"
	git push -q https://cyChop:$GITHUB_API_KEY@github.com/$TRAVIS_REPO_SLUG.git
	popd
