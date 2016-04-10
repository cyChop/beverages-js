publish: checkout buildweb push

checkout:
	git clone https://github.com/$TRAVIS_REPO_SLUG.git --branch gh-pages gh-pages
	cd gh-pages

buildweb: clean copy

clean:
	find . ! -name '.git' -type f -exec rm -f {} +

copy:
	cp -pr "$TRAVIS_BUILD_DIR/dist" ./
	cp -p "$TRAVIS_BUILD_DIR/index.html" ./

# Push quietly to avoid displaying the API key in logs
push:
	git add --all
	git -c user.name='Travis CI' -c user.email='travis' commit -m "Travis build $TRAVIS_BUILD_NUMBER"
	git push -q https://cyChop:$GITHUB_API_KEY@github.com/$TRAVIS_REPO_SLUG.git
	cd "$TRAVIS_BUILD_DIR"
