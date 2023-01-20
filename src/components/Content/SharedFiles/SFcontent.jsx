import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse } from 'react-collapse';

const SFcontent = ({ show }) => {
  return (
    <Collapse isOpened={show} checkTimeout={0}>
      <div className="flex justify-evenly flex-wrap m-2">
        <a
          className="file-shared"
          href="https://firebasestorage.googleapis.com/v0/b/messenger-cf907.appspot.com/o/files%2FCV_NguyenThiLuong_Intern%20FrontEnd_E.pdf?alt=media&token=8dd893fb-524c-4100-a756-99bfb507e07a"
          download
          target="_blank"
        >
          <div className="flex-center mr-2">
            <FontAwesomeIcon icon={faCloudArrowDown} />
          </div>
          <p className="truncate">CV_NguyenThiLuong_Intern FrontEnd_E.pdf</p>
          <div className="flex-center ml-2">
            <FontAwesomeIcon icon={faCloudArrowDown} />
          </div>
        </a>
        <a
          className="file-shared"
          href="https://firebasestorage.googleapis.com/v0/b/messenger-cf907.appspot.com/o/files%2FCV_NguyenThiLuong_Intern%20FrontEnd_E.pdf?alt=media&token=8dd893fb-524c-4100-a756-99bfb507e07a"
          download
          target="_blank"
        >
          <div className="flex-center mr-2">
            <FontAwesomeIcon icon={faCloudArrowDown} />
          </div>
          <p className="truncate">CV_NguyenThiLuong_Intern FrontEnd_E.pdf</p>
          <div className="flex-center ml-2">
            <FontAwesomeIcon icon={faCloudArrowDown} />
          </div>
        </a>
        <a
          className="file-shared"
          href="https://firebasestorage.googleapis.com/v0/b/messenger-cf907.appspot.com/o/files%2FCV_NguyenThiLuong_Intern%20FrontEnd_E.pdf?alt=media&token=8dd893fb-524c-4100-a756-99bfb507e07a"
          download
          target="_blank"
        >
          <div className="flex-center mr-2">
            <FontAwesomeIcon icon={faCloudArrowDown} />
          </div>
          <p className="truncate">CV_NguyenThiLuong_Intern FrontEnd_E.pdf</p>
          <div className="flex-center ml-2">
            <FontAwesomeIcon icon={faCloudArrowDown} />
          </div>
        </a>
      </div>
    </Collapse>
  );
};

export default SFcontent;
