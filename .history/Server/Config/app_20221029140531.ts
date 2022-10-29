import createError from 'http-errors';
import express, { NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

//step 1- import db package
import mongoose from 'mongoose';

import indexRouter from '../Routes/index'; //top level routes
import contactsListRouter from '../Routes/contacts-list';

//step 2 - DB configuration
import * as DBConfig from './db'
mongoose.connect(DBConfig.LocalURI); 
const db = mongoose.connection;//alias for the mongoose connection

//step 3 -Listen for Connections for Errors
db.on("open", function () {
  console.log(`Connect to MongoDB at:${DBConfig.HostName}`)
});

db.on("error", function () {
  console.error(`Connection Error`);
});

const app = express();

// view engine setup
app.set('views', path.join(__dirname, '../Views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

//use routes
app.use('/', indexRouter);
app.use('/', contactsListRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err:createError.HttpError, req:express.Request, res:express.Response, next:NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
