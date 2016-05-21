publish: buildweb

buildweb: sync

sync:
	rsync -avz --del "${TRAVIS_BUILD_DIR}/dist/" "${PUBLISH_DIR}/dist/"
	cp -pfv "${TRAVIS_BUILD_DIR}/src/index.html" "${PUBLISH_DIR}/"
