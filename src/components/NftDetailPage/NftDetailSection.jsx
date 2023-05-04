/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// Init
import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Nft from '../../assets/images/nft_detail.png';
import EthIcon from '../../assets/images/eth_icon.svg';
import HistoryIcon from '../../assets/images/history_icon.svg';
import BidIcon from '../../assets/images/bid_icon.svg';
import ZoomIcon from '../../assets/images/zoom_icon.png';

// Component
const options = ['None', 'Atria', 'Callisto'];

// const ITEM_HEIGHT = 48;
export default function NftDetailSection() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [checkedHistory, setCheckedHistory] = React.useState(false);
  const [checkedBid, setCheckedBid] = React.useState(false);

  const handleHistory = () => {
    setCheckedHistory((prev) => !prev);
  };
  const handleBid = () => {
    setCheckedBid((prev) => !prev);
  };
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="nftDetailContainer">
      <div className="nftDetailMainDiv">
        <div className="nftDetailUpperDiv">
          <div className="nftDetailImageDiv">
            <img className="NftCardZoomIcon" src={ZoomIcon} alt="ZoomIcon" />

            <img className="NftCardImage" src={Nft} alt="nft" />
          </div>
          <div className="nftDetailInfoDiv">
            <div className="nftDetailCollectionDiv">
              <div className="nftDetailCollectionName">Matrix collection #66391</div>
              <div className="nftDetailIcons">
                <FavoriteIcon sx={{ color: 'red' }} fontSize="large" />
                <ShareIcon sx={{ color: 'white' }} fontSize="large" />
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? 'long-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon sx={{ color: 'white' }} fontSize="large" />
                </IconButton>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    'aria-labelledby': 'long-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      //   maxHeight: ITEM_HEIGHT * 4.5,
                      width: '20ch',
                    },
                  }}
                >
                  {options.map((option) => (
                    <MenuItem key={option} selected={option === 'None'} onClick={handleClose}>
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </div>
            <div className="nftDetailTitleDiv">
              <div className="nftDetailName">The Killing Joker </div>
              <div className="nftDetailOwner">
                owned by <span>Asma09</span>{' '}
              </div>
            </div>
            <div className="nftDetailExpiryDiv">
              <div className="nftDetailExpiryDate">Sales end February, 2022 </div>
              <div className="nftDetailExpiryCounterDiv">
                <div className="nftDetailExpiryCounter">
                  <div className="nftDetailExpiryInt">23</div>
                  <div className="nftDetailExpiryAlp">hours</div>
                </div>
                <div className="nftDetailExpiryCounter">
                  <div className="nftDetailExpiryInt">51</div>
                  <div className="nftDetailExpiryAlp">minutes</div>
                </div>
                <div className="nftDetailExpiryCounter">
                  <div className="nftDetailExpiryInt">44</div>
                  <div className="nftDetailExpiryAlp">seconds</div>
                </div>
              </div>
            </div>
            <div className="nftDetailDivider" />
            <div className="nftDetailPriceDiv">
              <div className="nftDetailPriceHeading">Current Price</div>
              <div className="nftDetailPrice">
                <img src={EthIcon} alt="EthIcon" />
                0.005 <span>($ 3810.33)</span>{' '}
              </div>
            </div>
            <div className="nftDetailButtonDiv">
              <div className="nftDetailBuyBtn">Buy Now</div>
              <div className="nftDetailBidBtn">Place a bid</div>
            </div>
          </div>
        </div>
        <div className="nftDetailLowerDiv">
          <div className="nftDetailHistoryDiv">
            <Box>
              <div className="nftDetailCollapseDiv" onClick={handleHistory}>
                <div className="nftDetailCollapseTitleDiv">
                  <img src={HistoryIcon} alt="History" />
                  <div className="nftDetailCollapseTitle">History</div>
                </div>

                {checkedHistory ? (
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
                <Collapse in={checkedHistory}>
                  <div className="nftDetailDropedDiv">No Data Available</div>
                </Collapse>
              </Box>
            </Box>
          </div>
          <div className="nftDetailBidDiv">
            <Box>
              <div className="nftDetailCollapseDiv" onClick={handleBid}>
                <div className="nftDetailCollapseTitleDiv">
                  <img src={BidIcon} alt="Bid" />
                  <div className="nftDetailCollapseTitle">Bid</div>
                </div>

                {checkedBid ? (
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
                <Collapse in={checkedBid}>
                  <div className="nftDetailDropedDiv">No Data Available</div>
                </Collapse>
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
