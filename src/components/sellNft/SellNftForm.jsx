// Init
import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Box from '@mui/material/Box';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
// import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import { Collapse } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AttachMoneySharpIcon from '@mui/icons-material/AttachMoneySharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import PreviewCard from '../createNft/PreviewCard';
import nftImage from '../../assets/images/nft_detail.png';

// Component
export default function SellNftForm() {
  const [collectionDrop, setCollectionDrop] = React.useState(false);
  const [royaltyDrop, setRoyaltyDrop] = React.useState(false);
  const [currency, setCurrency] = React.useState(false);
  const [duration, setDuration] = React.useState(false);

  return (
    <div className="createNftFormContainer">
      <h1>List item for sale</h1>

      <div className="createNftFormMainDiv">
        <div className="createNftFormDiv">
          <div className="createNftFormLabel">
            <h3>Type </h3>
          </div>

          <div className="sellNftTypeDiv">
            <div className="sellNftTypeFixedDiv">
              <AttachMoneySharpIcon fontSize="large" sx={{ color: '#ffffff' }} />
              <p>Fixed price</p>
            </div>
            <div className="sellNftTypeAuctionDiv">
              <AccessTimeSharpIcon fontSize="large" sx={{ color: '#ffffff' }} />

              <p>Timed Auction</p>
            </div>
          </div>
          <div className="createNftFormInputDiv">
            <div className="createNftFormLabel">
              <h3>Auction method</h3>
              <InfoOutlinedIcon sx={{ color: 'white' }} />
            </div>
            <div
              className="createNftFormDropDiv "
              onClick={() => {
                setCollectionDrop((prev) => !prev);
              }}
              aria-hidden="true"
            >
              <p>Sell to high bider</p>

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
                <p>Sell to high bider</p>
                <p>Sell to last bider</p>
                <p>Sell to first bider</p>
                <p>None</p>
              </Collapse>
            </Box>
          </div>
          <div className="createNftFormInputDiv">
            <div className="createNftFormLabel">
              <h3>Starting price</h3>
              <InfoOutlinedIcon sx={{ color: 'white' }} />
            </div>
            <div className="sellNftFormAddTextDiv">
              <div className="sellNftFormAddCurrencyDiv">
                <div className="sellNftFormInputDiv ">
                  <div
                    className="sellNftFormDropSubDiv "
                    onClick={() => {
                      setCurrency((prev) => !prev);
                    }}
                    aria-hidden="true"
                  >
                    <p className="sellNftFormSubP">WETH</p>

                    {currency ? (
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
                    <Collapse className="sellNftFormCollapse" in={currency}>
                      <p>WETH</p>
                      <p>BitCoin</p>
                      <p>Poly</p>
                    </Collapse>
                  </Box>
                </div>
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
                <div
                  className="sellNftFormDropSubDiv "
                  onClick={() => {
                    setRoyaltyDrop((prev) => !prev);
                  }}
                  aria-hidden="true"
                >
                  <p className="sellNftFormSubP">10%</p>

                  {royaltyDrop ? (
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
                  <Collapse className="sellNftFormCollapse" in={royaltyDrop}>
                    <p>5%</p>
                    <p>10%</p>
                    <p>20%</p>
                  </Collapse>
                </Box>
              </div>
            </div>

            <div className="sellNftFormAddDurationDiv">
              <div className="sellNftFormInputDiv">
                <div className="sellNftFormLabel">
                  <h3>Duration</h3>
                  <InfoOutlinedIcon sx={{ color: 'white' }} />
                </div>
                <div
                  className="sellNftFormDropSubDiv "
                  onClick={() => {
                    setDuration((prev) => !prev);
                  }}
                  aria-hidden="true"
                >
                  <p className="sellNftFormSubP">Seven Days</p>
                  <CalendarTodayOutlinedIcon fontSize="large" sx={{ color: 'white' }} />
                </div>
                <Box
                  sx={{
                    '& > :not(style)': {
                      display: 'flex',
                    },
                  }}
                >
                  <Collapse className="sellNftFormCollapse" in={duration}>
                    <p>Select Duration</p>
                  </Collapse>
                </Box>
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
