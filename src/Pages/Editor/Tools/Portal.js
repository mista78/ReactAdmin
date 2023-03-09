import React, { useState, useEffect, useRef, Fragment, useContext, memo } from 'react';
import { createPortal } from 'react-dom';
import { selector, build } from './Utils';

const Portal = ({ children, id = "portal", className, style }) => {
    className = className || id;
    const exisPortal = selector('#' + id);
    if (exisPortal.length) {
        return createPortal(children, exisPortal[0]);
    }
    const containerPortal = build({
        tag: 'div',
        attributes: [
            ['id', id],
            ['class', className],
            ['style', style]
        ]
    });
    document.body.appendChild(containerPortal);
    return createPortal(children, containerPortal);
};

export default Portal;