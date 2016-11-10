publish: buildweb

buildweb: sync

sync:
	rsync -avz --del "${TRAVIS_BUILD_DIR}/dev/" "${PUBLISH_DIR}/"
	mkdir "${PUBLISH_DIR}/dist/" "${PUBLISH_DIR}/doc/"
	rsync -avz "${TRAVIS_BUILD_DIR}/dist/" "${PUBLISH_DIR}/dist/"
	rsync -avz "${TRAVIS_BUILD_DIR}/bin/doc/" "${PUBLISH_DIR}/doc/"
