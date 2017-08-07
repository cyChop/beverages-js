publish: buildweb

buildweb: sync

sync:
	rsync -avz --del "${TRAVIS_BUILD_DIR}/dist/" "${PUBLISH_DIR}/"
	rsync -avz --del "${TRAVIS_BUILD_DIR}/reports/doc/" "${PUBLISH_DIR}/doc/"
