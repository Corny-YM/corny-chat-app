import moment from 'moment';

export const formatTime = (obj) => {
  return moment(obj).fromNow(true);
};

export const formatDate = (obj) => {
  const now = moment(moment().toArray());
  const time = moment(obj);
  if (now.diff(time, 'years')) {
    return moment(obj).format('DD/MM/YY, k:mm');
  } else if (now.diff(time, 'months') || now.diff(time, 'weeks')) {
    return moment(obj).format('MMM DD YYYY, k:mm');
  } else if (now.diff(time, 'days')) {
    return moment(obj).format('ddd k:mm');
  } else {
    return moment(obj).format('k:mm');
  }
};
