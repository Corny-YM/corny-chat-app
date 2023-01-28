import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse } from 'react-collapse';

const SFcontent = ({ data, show }) => {
  return (
    <Collapse isOpened={show} checkTimeout={0}>
      <div className="flex justify-evenly flex-wrap m-2">
        {data.length > 0 ? (
          data.map((value) => (
            <a
              key={value?.id}
              className="file-shared"
              href={value?.chatContent}
              download
              target="_blank"
            >
              <div className="flex-center mr-2">
                <FontAwesomeIcon icon={faCloudArrowDown} />
              </div>
              <p className="truncate">{value?.fileName}</p>
              <div className="flex-center ml-2">
                <FontAwesomeIcon icon={faCloudArrowDown} />
              </div>
            </a>
          ))
        ) : (
          <div className="flex-center overflow-hidden">
            <i className="font-bold text-red-700">
              Don't have anything share yet!
            </i>
          </div>
        )}
      </div>
    </Collapse>
  );
};

export default SFcontent;
