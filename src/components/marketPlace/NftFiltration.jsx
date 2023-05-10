/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
// Init
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Collapse, Grid, Checkbox, FormControlLabel } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';
import CancelIcon from '@mui/icons-material/Cancel';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NftCard from '../common/NftCard';
import FilterHeader from '../common/FilterHeader';
import api from '../../api';

// Component
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function NftFiltration() {
  const [showFilter, setShowFilter] = useState(false);
  const [value, setValue] = useState('All items');
  const [recentDrop, setRecentDrop] = React.useState(false);
  const [priceDrop, setPriceDrop] = React.useState(false);
  const [statusDrop, setStatusDrop] = React.useState(false);
  // const [collectionDrop, setCollectionDrop] = React.useState(false);
  const [categoriesDrop, setCategoriesDrop] = React.useState(false);
  const [currencyDrop, setCurrencyDrop] = React.useState(false);
  const [priceValues, setPriceValues] = useState({
    min: '',
    max: '',
  });
  const [nftData, setNftData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [checked, setChecked] = useState({
    recent: 0,
    top: 0,
    lowest: 0,
  });
  const getAllNFTData = async () => {
    await api('get', 'nft/').then((res) => {
      setNftData(res?.data?.results);
    });
  };
  const getFilteredNFTData = async (targetCategory) => {
    await api('get', `nft/get/?category=${targetCategory}`).then((res) => {
      setFilteredData(res?.data?.Nfts);
    });
  };

  const getRecentNft = async (targetCheck) => {
    await api('get', `nft/?recent=${targetCheck}`).then((res) => {
      setNftData(res?.data?.results);
      setFilteredData(res?.data?.results);
    });
  };
  const getLowestToHighesttNft = async (targetCheck) => {
    await api('get', `nft/?lth=${targetCheck}`).then((res) => {
      setNftData(res?.data?.results);
      setFilteredData(res?.data?.results);
    });
  };

  useEffect(() => {
    if (checked.recent === -1) {
      getRecentNft(checked.recent);
    } else if (checked.lowest === 1) {
      getLowestToHighesttNft(checked.lowest);
    } else {
      getFilteredNFTData(value);
      getAllNFTData();
    }
  }, [value, checked]);

  const handlefilter = (targetFilterValue) => {
    if (targetFilterValue === 'recent') {
      setChecked({ checked, recent: -1 });
    } else if (targetFilterValue === 'lowest') {
      setChecked({ checked, lowest: 1 });
    } else if (targetFilterValue === 'top') {
      setChecked({ checked, top: 1 });
    }
  };
  const handleResetFilter = () => {
    setPriceValues({ ...priceValues, min: '', max: '' });
    setChecked({ ...checked, recent: 0, lowest: 0, top: 0 });
  };
  const handlePriceChange = (e) => {
    setPriceValues({ ...priceValues, [e.target.name]: e.target.value });
  };

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="NftFiltrationContainer">
      <FilterHeader
        title="NFT Art Market"
        desp="Once You Start Reading our Comics, You Cant Stop! Come and join us to discover some new
        worlds with us."
      />
      <div className="NftFiltrationSection">
        <div className="NftFiltrationTabsDiv">
          <div className="NftFiltrationFilterTab">
            <TuneIcon fontSize="large" onClick={handleShowFilter} aria-hidden="true" />
            <div onClick={handleShowFilter} aria-hidden="true">
              Filter
            </div>
          </div>
          <div className="NftFiltrationCategoryTab">
            <div className='"NftFiltrationResultDiv'>{nftData?.length} results</div>
            <div className="NftFiltrationTabs">
              <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab
                      className="NftFiltrationTab"
                      value="All items"
                      label="All items"
                      {...a11yProps('All items')}
                    />
                    <Tab
                      className="NftFiltrationTab"
                      value="Art"
                      label="Art"
                      {...a11yProps('Art')}
                    />
                    <Tab
                      className="NftFiltrationTab"
                      value="Game"
                      label="Game"
                      {...a11yProps('Game')}
                    />
                    <Tab
                      className="NftFiltrationTab"
                      value="Photography"
                      label="Photography"
                      {...a11yProps('Photography')}
                    />
                    <Tab
                      className="NftFiltrationTab"
                      value="Music"
                      label="Music"
                      {...a11yProps('Music')}
                    />
                    <Tab
                      className="NftFiltrationTab"
                      value="Video"
                      label="Video"
                      {...a11yProps('Video')}
                    />
                  </Tabs>
                </Box>
              </Box>
            </div>
          </div>
        </div>
        <div className="NftFiltrationMainDiv">
          {showFilter && (
            <div className="NftFiltrationSideDiv">
              <Box className="NftFiltrationDropDownBox">
                <div
                  className="NftFiltrationDropDownDiv"
                  onClick={() => {
                    setRecentDrop((prev) => !prev);
                  }}
                  aria-hidden="true"
                >
                  <div>
                    <div className="NftFiltrationDropTitle">Filter</div>
                  </div>

                  {recentDrop ? (
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
                  <Collapse in={recentDrop}>
                    <div className="recent_options">
                      <FormControlLabel
                        className="collectionFilterCheckboxLabel"
                        control={<Checkbox checked={checked.recent} size="large" />}
                        label="Recently added"
                        name="recent"
                        onChange={(e) => {
                          handlefilter(e.target.name);
                        }}
                      />
                      <FormControlLabel
                        className="collectionFilterCheckboxLabel"
                        control={<Checkbox checked={checked.top} size="large" />}
                        label="Top Rated"
                        name="top"
                        onChange={(e) => {
                          handlefilter(e.target.name);
                        }}
                      />
                      <FormControlLabel
                        className="collectionFilterCheckboxLabel"
                        control={<Checkbox checked={checked.lowest} size="large" />}
                        label="Lowest to Highest"
                        name="lowest"
                        onChange={(e) => {
                          handlefilter(e.target.name);
                        }}
                      />
                    </div>
                  </Collapse>
                </Box>
              </Box>
              <Box className="NftFiltrationDropDownBox">
                <div
                  className="NftFiltrationDropDownDiv"
                  onClick={() => {
                    setPriceDrop((prev) => !prev);
                  }}
                  aria-hidden="true"
                >
                  <div>
                    <div className="NftFiltrationDropTitle">Price</div>
                  </div>

                  {priceDrop ? (
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
                  <Collapse in={priceDrop}>
                    <div className="NftFiltrationCollapseDiv">
                      <div className="NftFiltrationPriceDrop">
                        <Box className="NftFiltrationDropDownBox">
                          <div
                            className="NftFiltrationDropDownDiv"
                            onClick={() => {
                              setCurrencyDrop((prev) => !prev);
                            }}
                            aria-hidden="true"
                          >
                            <div>
                              <div className="NftFiltrationDropTitle">ETH</div>
                            </div>

                            {currencyDrop ? (
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
                            <Collapse in={currencyDrop}>
                              <div className="NftFiltrationCollapseDiv">No Data Available</div>
                            </Collapse>
                          </Box>
                        </Box>
                        <div className="NftFiltrationPriceLimitDiv">
                          <div className="NftFiltrationPriceLimitLeft">
                            <input
                              className="NftFiltrationPriceLimitMin"
                              value={priceValues.min}
                              name="min"
                              placeholder="Min"
                              onChange={handlePriceChange}
                            />
                            <div className="NftFiltrationPriceLimitDivider"> -</div>
                            <input
                              className="NftFiltrationPriceLimitMin"
                              value={priceValues.max}
                              name="max"
                              placeholder="Max"
                              onChange={handlePriceChange}
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              handlefilter('filterByPrice');
                            }}
                            className="NftFiltrationPriceLimitRight"
                          >
                            <KeyboardArrowRightIcon sx={{ color: 'black' }} fontSize="large" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Collapse>
                </Box>
              </Box>
              <Box className="NftFiltrationDropDownBox">
                <div
                  className="NftFiltrationDropDownDiv"
                  onClick={() => {
                    setStatusDrop((prev) => !prev);
                  }}
                  aria-hidden="true"
                >
                  <div>
                    <div className="NftFiltrationDropTitle">Status</div>
                  </div>

                  {statusDrop ? (
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
                  <Collapse in={statusDrop}>
                    <div className="NftFiltrationCollapseDiv">No Data Available</div>
                  </Collapse>
                </Box>
              </Box>
              {/* <Box className="NftFiltrationDropDownBox">
                <div
                  className="NftFiltrationDropDownDiv"
                  onClick={() => {
                    setCollectionDrop((prev) => !prev);
                  }}
                  aria-hidden="true"
                >
                  <div>
                    <div className="NftFiltrationDropTitle">Collections</div>
                  </div>

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
                  <Collapse in={collectionDrop}>
                    <div className="NftFiltrationCollapseDiv">No Data Available</div>
                  </Collapse>
                </Box>
              </Box> */}
              <Box className="NftFiltrationDropDownBox">
                <div
                  className="NftFiltrationDropDownDiv"
                  onClick={() => {
                    setCategoriesDrop((prev) => !prev);
                  }}
                  aria-hidden="true"
                >
                  <div>
                    <div className="NftFiltrationDropTitle">Categories</div>
                  </div>

                  {categoriesDrop ? (
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
                  <Collapse in={categoriesDrop}>
                    <div className="NftFiltrationCollapseDiv">No Data Available</div>
                  </Collapse>
                </Box>
              </Box>

              <div className="NftFiltrationResetDiv">
                <button
                  type="button"
                  onClick={handleResetFilter}
                  className="NftFiltrationResetIcon"
                >
                  <CancelIcon sx={{ color: 'white' }} />
                </button>
                <div className="NftFiltrationResetText">Reset filter</div>
              </div>
            </div>
          )}
          <Box sx={{ width: showFilter ? '70%' : '100%' }}>
            <TabPanel value={value} index="All items">
              <Grid className="NftFiltrationGridContainer" container>
                {nftData &&
                  nftData.map((item) => {
                    return (
                      <Grid className="NftFiltrationGrid" md={showFilter ? 3.8 : 2.8}>
                        <NftCard nftData={item} />
                      </Grid>
                    );
                  })}
              </Grid>
            </TabPanel>
            <TabPanel value={value} index="Art">
              <Grid className="NftFiltrationGridContainer" container>
                {filteredData &&
                  filteredData.map((item) => {
                    return (
                      <Grid className="NftFiltrationGrid" md={showFilter ? 3.8 : 2.8}>
                        <NftCard nftData={item} />
                      </Grid>
                    );
                  })}
              </Grid>
            </TabPanel>
            <TabPanel value={value} index="Game">
              <Grid className="NftFiltrationGridContainer" container>
                {filteredData &&
                  filteredData.map((item) => {
                    return (
                      <Grid className="NftFiltrationGrid" md={showFilter ? 3.8 : 2.8}>
                        <NftCard nftData={item} />
                      </Grid>
                    );
                  })}
              </Grid>
            </TabPanel>
            <TabPanel value={value} index="Photograpghy">
              <Grid className="NftFiltrationGridContainer" container>
                {filteredData &&
                  filteredData.map((item) => {
                    return (
                      <Grid className="NftFiltrationGrid" md={showFilter ? 3.8 : 2.8}>
                        <NftCard nftData={item} />
                      </Grid>
                    );
                  })}
              </Grid>
            </TabPanel>
            <TabPanel value={value} index="Music">
              <Grid className="NftFiltrationGridContainer" container>
                {filteredData &&
                  filteredData.map((item) => {
                    return (
                      <Grid className="NftFiltrationGrid" md={showFilter ? 3.8 : 2.8}>
                        <NftCard nftData={item} />
                      </Grid>
                    );
                  })}
              </Grid>
            </TabPanel>
            <TabPanel value={value} index="Video">
              <Grid className="NftFiltrationGridContainer" container>
                {filteredData &&
                  filteredData.map((item) => {
                    return (
                      <Grid className="NftFiltrationGrid" md={showFilter ? 3.8 : 2.8}>
                        <NftCard nftData={item} />
                      </Grid>
                    );
                  })}
              </Grid>
            </TabPanel>
            <div className="NftFiltrationLoadBtnDiv">
              <div className="NftFiltrationLoadBtn">Load More</div>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}
