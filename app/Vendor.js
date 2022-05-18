import React, { Component } from 'react';
import $ from 'jquery';

// Disable warning "Synchronous XMLHttpRequest on the main thread is deprecated.."
$.ajaxPrefilter(o => o.async = true);

// Modernizr
import './modernizr.js';

// Whirl
import 'whirl/dist/whirl.css';
// Font Awesome
import '../public/assets/css/fontawesome-5.0.13/css/fa-brands.css'
import '../public/assets/css/fontawesome-5.0.13/css/fa-regular.css'
import '../public/assets/css/fontawesome-5.0.13/css/fa-solid.css'
import '../public/assets/css/fontawesome-5.0.13/css/fontawesome.css'

// Application Styles
import '../public/assets/css/bootstrap-4.3.1/bootstrap.min.css'
import '../public/assets/css/font.css'
import './styles/app.scss'