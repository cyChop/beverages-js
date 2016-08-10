publish: buildweb

buildweb: sync

sync:
	rsync -avz --del "${TRAVIS_BUILD_DIR}/dist/" "${PUBLISH_DIR}/dist/"
	cp -pfv "${TRAVIS_BUILD_DIR}/src/dev/index.html" "${PUBLISH_DIR}/"
	rsync -avz --del "${TRAVIS_BUILD_DIR}/build/doc/" "${PUBLISH_DIR}/doc/"
