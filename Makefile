publish: buildweb

buildweb: sync

sync:
	rsync -avz --del "${TRAVIS_BUILD_DIR}/dist/" "${PUBLISH_DIR}/dist/"
	cp -pfv "${TRAVIS_BUILD_DIR}/src/index.html" "${PUBLISH_DIR}/"
	# Pay the price for changing the file tree; this will be removed later
	sed -i s#\\.\\./## "${PUBLISH_DIR}/index.html"
	rsync -avz --del "${TRAVIS_BUILD_DIR}/build/doc/" "${PUBLISH_DIR}/doc/"
