publish: buildweb

#buildweb: clean copy
buildweb: copy

#clean:
#	find "${PUBLISH_DIR}" -not -name '.git*' -exec rm -rfv {} +

copy:
	cp -prfv "${TRAVIS_BUILD_DIR}/dist" "${PUBLISH_DIR}/"
	cp -pfv "${TRAVIS_BUILD_DIR}/index.html" "${PUBLISH_DIR}/"
