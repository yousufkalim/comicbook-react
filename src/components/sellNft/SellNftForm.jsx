/* eslint-disable react/button-has-type */
// Init
import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import Box from '@mui/material/Box';s
// import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import { FormControl, MenuItem, Select } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AttachMoneySharpIcon from '@mui/icons-material/AttachMoneySharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PreviewCard from '../createNft/PreviewCard';
import nftImage from '../../assets/images/nft_detail.png';

// Component
export default function SellNftForm() {
  const [collectionDrop, setCollectionDrop] = React.useState('');
  const [royaltyDrop, setRoyaltyDrop] = React.useState('');
  const [currency, setCurrency] = React.useState('');
  // const [duration, setDuration] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [type, setType] = React.useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const today = new Date();
  const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  return (
    <div className="createNftFormContainer">
      <h1>List item for sale</h1>

      <div className="createNftFormMainDiv">
        <div className="createNftFormDiv">
          <div style={{ width: '100%' }}>
            <div className="createNftFormLabel">
              <h3>Type </h3>
            </div>

            <div className="sellNftTypeDiv">
              <button
                className={type ? 'sellNftTypeFixedDivFocus' : 'sellNftTypeFixedDiv'}
                onClick={() => setType(true)}
              >
                <AttachMoneySharpIcon
                  fontSize="large"
                  sx={{ color: type ? '#ffffff' : '#ffffff50' }}
                />
                <p>Fixed price</p>
              </button>
              <button
                className={type ? 'sellNftTypeFixedDiv' : 'sellNftTypeFixedDivFocus'}
                onClick={() => setType(false)}
              >
                <AccessTimeSharpIcon
                  fontSize="large"
                  sx={{ color: type ? '#ffffff50' : '#ffffff' }}
                />

                <p>Timed Auction</p>
              </button>
            </div>
          </div>
          {type ? (
            <div style={{ width: '100%' }}>
              <div className="createNftFormInputDiv">
                <div className="createNftFormLabel">
                  <h3>Price</h3>
                  <InfoOutlinedIcon sx={{ color: 'white' }} />
                </div>
                <div className="sellNftFormAddTextDiv">
                  <div className="sellNftFormAddCurrencyDiv">
                    <FormControl className="sellNftFormInputDiv">
                      <Select
                        className="sellNftFormDropSubDiv"
                        value={currency}
                        onChange={(event) => setCurrency(event.target.value)}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem value="">WETH</MenuItem>
                        <MenuItem value={10}>BitCoin</MenuItem>
                        <MenuItem value={20}>Poly</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  <div className="sellNftFormAddAmountDiv">
                    <div className="sellNftFormInputDiv">
                      <div className="sellNftFormDropSubDiv ">
                        <input className="sellNftFormSubP" placeholder="0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sellNftFormAddTextDiv">
                <div className="sellNftFormAddRoyaltyDiv" style={{ width: '100%' }}>
                  <div className="sellNftFormInputDiv">
                    <div className="sellNftFormLabel">
                      <h3>Royalty</h3>
                      <InfoOutlinedIcon sx={{ color: 'white' }} />
                    </div>
                    <FormControl className="sellNftFormInputDiv">
                      <Select
                        className="sellNftFormDropSubDiv"
                        value={royaltyDrop}
                        onChange={(event) => setRoyaltyDrop(event.target.value)}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem value="">5%</MenuItem>
                        <MenuItem value={10}>10%</MenuItem>
                        <MenuItem value={20}>20%</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>

              <div className="createNftFormDivider" />
              <div className="createNftFormInputDiv">
                <div className="createNftFormLabel">
                  <h3>Fees</h3>
                  <InfoOutlinedIcon sx={{ color: 'white' }} />
                </div>
                <div className="createNftFormLabel sellNftFromFeeDiv">
                  <h4>Service fee</h4>
                  <p>2.5%</p>
                </div>
              </div>
              <div className="createNftFormButtonDiv">
                <button type="submit">
                  <p>Complete Listing</p>
                  <NavigateNextOutlinedIcon fontSize="large" />
                </button>
              </div>
            </div>
          ) : (
            <div style={{ width: '100%' }}>
              <div className="createNftFormInputDiv">
                <div className="createNftFormLabel">
                  <h3>Auction method</h3>
                  <InfoOutlinedIcon sx={{ color: 'white' }} />
                </div>
                <FormControl className="createNftFormDropDiv">
                  <Select
                    className="createNftFormSelect"
                    value={collectionDrop}
                    onChange={(event) => setCollectionDrop(event.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value={10}>Sell to high bider</MenuItem>
                    <MenuItem value={20}>Sell to last bider</MenuItem>
                    <MenuItem value={30}>Sell to first bider</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="createNftFormInputDiv">
                <div className="createNftFormLabel">
                  <h3>Starting price</h3>
                  <InfoOutlinedIcon sx={{ color: 'white' }} />
                </div>
                <div className="sellNftFormAddTextDiv">
                  <div className="sellNftFormAddCurrencyDiv">
                    <FormControl className="sellNftFormInputDiv">
                      <Select
                        className="sellNftFormDropSubDiv"
                        value={currency}
                        onChange={(event) => setCurrency(event.target.value)}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem value="">WETH</MenuItem>
                        <MenuItem value={10}>BitCoin</MenuItem>
                        <MenuItem value={20}>Poly</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  <div className="sellNftFormAddAmountDiv">
                    <div className="sellNftFormInputDiv">
                      <div className="sellNftFormDropSubDiv ">
                        <input className="sellNftFormSubP" placeholder="0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sellNftFormAddTextDiv">
                <div className="sellNftFormAddRoyaltyDiv">
                  <div className="sellNftFormInputDiv ">
                    <div className="sellNftFormLabel">
                      <h3>Royalty</h3>
                      <InfoOutlinedIcon sx={{ color: 'white' }} />
                    </div>
                    <FormControl className="sellNftFormInputDiv">
                      <Select
                        className="sellNftFormDropSubDiv"
                        value={royaltyDrop}
                        onChange={(event) => setRoyaltyDrop(event.target.value)}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem value="">5%</MenuItem>
                        <MenuItem value={10}>10%</MenuItem>
                        <MenuItem value={20}>20%</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>

                <div className="sellNftFormAddDurationDiv">
                  <div className="sellNftFormInputDiv">
                    <div className="sellNftFormLabel">
                      <h3>Duration</h3>
                      <InfoOutlinedIcon sx={{ color: 'white' }} />
                    </div>
                    <div className="sellNftFormDropSubDiv ">
                      <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        minDate={maxDate}
                      />
                      <CalendarTodayOutlinedIcon fontSize="large" sx={{ color: 'white' }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="createNftFormDivider" />
              <div className="createNftFormInputDiv">
                <div className="createNftFormLabel">
                  <h3>Fees</h3>
                  <InfoOutlinedIcon sx={{ color: 'white' }} />
                </div>
                <div className="createNftFormLabel sellNftFromFeeDiv">
                  <h4>Service fee</h4>
                  <p>2.5%</p>
                </div>
              </div>
              <div className="createNftFormButtonDiv">
                <button type="submit">
                  <p>Complete Listing</p>
                  <NavigateNextOutlinedIcon fontSize="large" />
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="sellNftPreviewDiv">
          <div className="sellNftPreviewBtnDiv">
            <p>Preview</p>
            <CloseSharpIcon fontSize="large" sx={{ color: '#ffffff' }} />
          </div>
          <PreviewCard Image={nftImage} />
        </div>
      </div>
    </div>
  );
}
