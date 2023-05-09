// Init
import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Box from '@mui/material/Box';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import { Collapse } from '@mui/material';
import PreviewCard from './PreviewCard';

// Component
export default function CreateNftForm() {
  const [collectionDrop, setCollectionDrop] = React.useState(false);
  const [propertyDrop, setPropertyDrop] = React.useState(false);
  const [levelDrop, setLevelDrop] = React.useState(false);
  const [statusDrop, setStatusDrop] = React.useState(false);
  const [blockchain, setBlockchain] = React.useState(false);

  return (
    <div className="createNftFormContainer">
      <h1>Create Your NFT</h1>
      <div className="createNftFormUploadTitle">
        <h2>Upload file</h2>
        <p>Drag or choose your file to upload</p>
      </div>
      <div className="createNftFormMainDiv">
        <div className="createNftFormDiv">
          <div className="createNftUploadFileDiv">
            <UploadFileOutlinedIcon fontSize="large" sx={{ color: 'white' }} />
            <p>PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.</p>
          </div>
          <h2>Item Details</h2>
          <div className="createNftFormInputDiv">
            <div className="createNftFormLabel">
              <h3>Item name</h3>
              <InfoOutlinedIcon sx={{ color: 'white' }} />
            </div>
            <div className="createNftFormInput">
              <input placeholder="NFT Name" />
            </div>
          </div>
          <div className="createNftFormInputDiv">
            <div className="createNftFormLabel">
              <h3>Description</h3>
              <InfoOutlinedIcon sx={{ color: 'white' }} />
            </div>
            <div className="createNftFormInput">
              <textarea placeholder="Provide a detailed description of your item" />
            </div>
          </div>
          <div className="createNftFormInputDiv">
            <div className="createNftFormLabel">
              <h3>Collection</h3>
              <InfoOutlinedIcon sx={{ color: 'white' }} />
            </div>
            <div
              className="createNftFormDropDiv "
              onClick={() => {
                setCollectionDrop((prev) => !prev);
              }}
              aria-hidden="true"
            >
              <p>This is the collection where your item will appear</p>

              {collectionDrop ? (
                <ExpandLess fontSize="large" sx={{ color: 'white' }} />
              ) : (
                <ExpandMore fontSize="large" sx={{ color: 'white' }} />
              )}
            </div>
            <Box
              sx={{
                '& > :not(style)': {
                  display: 'flex',
                },
              }}
            >
              <Collapse className="createNftFormCollapse" in={collectionDrop}>
                <p>Art</p>
                <p>Game</p>
                <p>Photography</p>
                <p>Music</p>
                <p>Video</p>
              </Collapse>
            </Box>
          </div>
          <div className="createNftFormAddTextDiv">
            <div className="createNftFormAddTextSubDiv">
              <div className="createNftFormInputDiv ">
                <div className="createNftFormLabel">
                  <h3>Properties</h3>
                </div>
                <div
                  className="createNftFormDropSubDiv "
                  onClick={() => {
                    setPropertyDrop((prev) => !prev);
                  }}
                  aria-hidden="true"
                >
                  <p className="createNftFormSubP">Textual traits that show up as rectangles</p>

                  <AddBoxRoundedIcon fontSize="large" sx={{ color: 'white' }} />
                </div>
                <Box
                  sx={{
                    '& > :not(style)': {
                      display: 'flex',
                    },
                  }}
                >
                  <Collapse className="createNftFormCollapse" in={propertyDrop}>
                    <p>Not Sure if its a dropdown</p>
                  </Collapse>
                </Box>
              </div>
            </div>
            <div className="createNftFormAddTextSubDiv">
              <div className="createNftFormInputDiv">
                <div className="createNftFormLabel">
                  <h3>Levels</h3>
                </div>
                <div
                  className="createNftFormDropSubDiv "
                  onClick={() => {
                    setLevelDrop((prev) => !prev);
                  }}
                  aria-hidden="true"
                >
                  <p className="createNftFormSubP">Textual traits that show up as rectangles</p>
                  <AddBoxRoundedIcon fontSize="large" sx={{ color: 'white' }} />
                </div>
                <Box
                  sx={{
                    '& > :not(style)': {
                      display: 'flex',
                    },
                  }}
                >
                  <Collapse className="createNftFormCollapse" in={levelDrop}>
                    <p>Not Sure if its a dropdown</p>
                  </Collapse>
                </Box>
              </div>
            </div>
            <div className="createNftFormAddTextSubDiv">
              <div className="createNftFormInputDiv">
                <div className="createNftFormLabel">
                  <h3>Stats</h3>
                </div>
                <div
                  className="createNftFormDropSubDiv "
                  onClick={() => {
                    setStatusDrop((prev) => !prev);
                  }}
                  aria-hidden="true"
                >
                  <p className="createNftFormSubP">Textual traits that show up as rectangles</p>

                  <AddBoxRoundedIcon fontSize="large" sx={{ color: 'white' }} />
                </div>
                <Box
                  sx={{
                    '& > :not(style)': {
                      display: 'flex',
                    },
                  }}
                >
                  <Collapse className="createNftFormCollapse" in={statusDrop}>
                    <p>Not Sure if its a dropdown</p>
                  </Collapse>
                </Box>
              </div>
            </div>
          </div>
          <div className="createNftFormInputDiv">
            <div className="createNftFormLabel">
              <h3>Blockchain</h3>
              <InfoOutlinedIcon sx={{ color: 'white' }} />
            </div>
            <div
              className="createNftFormDropDiv "
              onClick={() => {
                setBlockchain((prev) => !prev);
              }}
              aria-hidden="true"
            >
              <p>Ethereum</p>

              {blockchain ? (
                <ExpandLess fontSize="large" sx={{ color: 'white' }} />
              ) : (
                <ExpandMore fontSize="large" sx={{ color: 'white' }} />
              )}
            </div>
            <Box
              sx={{
                '& > :not(style)': {
                  display: 'flex',
                },
              }}
            >
              <Collapse className="createNftFormCollapse" in={blockchain}>
                <p>Ethereum</p>
                <p>Polygon</p>
                <p>Bitcoin</p>
              </Collapse>
            </Box>
          </div>
          <div className="createNftFormInputDiv">
            <div className="createNftFormLabel">
              <h3>Metadata</h3>
              <InfoOutlinedIcon sx={{ color: 'white' }} />
            </div>
            <div className="createNftFormInput">
              <input placeholder="To freeze your metadata, you must create your item first" />
            </div>
          </div>
          <div className="createNftFormDivider" />
          <div className="createNftFormButtonDiv">
            <button type="submit">
              <p>Create Nft</p>
              <NavigateNextOutlinedIcon fontSize="large" />
            </button>
          </div>
        </div>
        <div className="createNftPreviewDiv">
          <PreviewCard />
        </div>
      </div>
    </div>
  );
}
