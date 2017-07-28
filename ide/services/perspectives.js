/*******************************************************************************
 * Copyright (c) 2017 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * Contributors:
 * SAP - initial API and implementation
 *******************************************************************************/

/* eslint-env node, dirigible */

var extensions = require('core/v3/extensions');
var response = require('http/v3/response');

var perspectives = [];
var perspectiveExtensions = extensions.getExtensions('ide-perspective');
for (var i=0; i<perspectiveExtensions.length; i++) {
    var module = perspectiveExtensions[i];
    perspectiveExtension = require(module);
    var perspective = perspectiveExtension.getPerspective();
    perspectives.push(perspective);
}
response.println(JSON.stringify(perspectives));
