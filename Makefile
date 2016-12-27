publish: buildweb

buildweb: sync

sync:
	rsync -avz "${TRAVIS_BUILD_DIR}/dev/" "${PUBLISH_DIR}/"
	rsync -avz --del "${TRAVIS_BUILD_DIR}/dist/" "${PUBLISH_DIR}/dist/"
	rsync -avz --del "${TRAVIS_BUILD_DIR}/reports/doc/" "${PUBLISH_DIR}/doc/"
