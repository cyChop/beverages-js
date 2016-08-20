publish: buildweb

buildweb: sync

sync:
	rsync -avz --del "${TRAVIS_BUILD_DIR}/dist/" "${PUBLISH_DIR}/dist/"
	cp -pfv "${TRAVIS_BUILD_DIR}/dev/index.html" "${PUBLISH_DIR}/"
	rsync -avz --del "${TRAVIS_BUILD_DIR}/bin/doc/" "${PUBLISH_DIR}/doc/"
