// Init
import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Box from '@mui/material/Box';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import { Collapse, MenuItem } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PreviewCard from './PreviewCard';

// Component
export default function CreateNftForm() {
  const [propertyDrop, setPropertyDrop] = React.useState(false);
  const [levelDrop, setLevelDrop] = React.useState(false);
  const [statusDrop, setStatusDrop] = React.useState(false);
  const [blockchain, setBlockchain] = React.useState('');
  const [age, setAge] = React.useState('');
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="createNftFormContainer">
      <h1>Create Your NFT</h1>
      <div className="createNftFormUploadTitle">
        <h2>Upload file</h2>
        <p>Drag or choose your file to upload</p>
      </div>
      <div className="createNftFormMainDiv">
        <div className="createNftFormDiv">
          <label htmlFor="file-upload" className="createNftUploadFileDiv">
            <UploadFileOutlinedIcon fontSize="large" sx={{ color: 'white' }} />
            <p>{selectedFile ? selectedFile.name : 'PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.'}</p>
            <input
              id="file-upload"
              type="file"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </label>
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
            <FormControl className="createNftFormDropDiv">
              <Select
                className="createNftFormSelect"
                value={age}
                onChange={(event) => setAge(event.target.value)}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Art</MenuItem>
                <MenuItem value={20}>Game</MenuItem>
                <MenuItem value={30}>Photography</MenuItem>
                <MenuItem value={40}>Music</MenuItem>
                <MenuItem value={50}>Video</MenuItem>
              </Select>
            </FormControl>
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
            <FormControl className="createNftFormDropDiv">
              <Select
                className="createNftFormSelect"
                value={blockchain}
                onChange={(event) => setBlockchain(event.target.value)}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ethereum</MenuItem>
                <MenuItem value={20}>Polygon</MenuItem>
                <MenuItem value={30}>Bitcoin</MenuItem>
              </Select>
            </FormControl>
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
