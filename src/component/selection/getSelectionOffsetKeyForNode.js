/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getSelectionOffsetKeyForNode
 * @format
 * @flow
 */

'use strict';

const isElement = require('isElement');

/**
 * Get offset key from a node or it's child nodes. Return the first offset key
 * found on the DOM tree of given node.
 */
function getSelectionOffsetKeyForNode(node: Node): ?string {
  if (isElement(node)) {
    const castedNode: Element = (node: any);
    const offsetKey = castedNode.getAttribute('data-offset-key');
    if (offsetKey) {
      return offsetKey;
    }
    for (var ii = 0; ii < castedNode.childNodes.length; ii++) {
      const childOffsetKey = getSelectionOffsetKeyForNode(
        castedNode.childNodes[ii],
      );
      if (childOffsetKey) {
        return childOffsetKey;
      }
    }
  }
  return null;
}

module.exports = getSelectionOffsetKeyForNode;
