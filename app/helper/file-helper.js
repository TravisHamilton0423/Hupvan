import { get } from 'lodash';

export const fileTypes = {
  png: 'image',
  jpeg: 'image',
  ico: 'image',
  bmp: 'image',

  txt: 'text',
  log: 'text',
  conf: 'text',

  html: 'html',
  htm: 'html',
  blade: 'html',

  doc: 'word',
  docx: 'word',

  xls: 'excel',
  xlsx: 'excel',

  pdf: 'pdf',

  '7z': 'archive',
  tgz: 'archive',
  gz: 'archive',
  rar: 'archive',
  zip: 'archive',

  mp3: 'audio',
  wav: 'audio',
  ogg: 'audio',

  mpeg: 'video',
  '3gp': 'video',
  mp4: 'video',
  avi: 'video',
};

export const getFileTypeFromName = (filename) => {
  const filenames = filename.split('.');
  if (filenames.length <= 1) return 'alt';

  return getFileType(filenames.pop());
};

export const getFileType = ext => get(fileTypes, ext, 'alt');
