/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
// Init
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Collapse, Grid } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';
import CancelIcon from '@mui/icons-material/Cancel';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NftCard from '../common/NftCard';
import FilterHeader from '../common/FilterHeader';
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
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function NftFiltration() {
  const [showFilter, setShowFilter] = useState(false);
  console.log('showFilter', showFilter);
  const [value, setValue] = React.useState(0);
  const [recentDrop, setRecentDrop] = React.useState(false);
  const [priceDrop, setPriceDrop] = React.useState(false);
  const [statusDrop, setStatusDrop] = React.useState(false);
  const [collectionDrop, setCollectionDrop] = React.useState(false);
  const [categoriesDrop, setCategoriesDrop] = React.useState(false);
  const [currencyDrop, setCurrencyDrop] = React.useState(false);

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
            <div className='"NftFiltrationResultDiv'>22,133,154 results</div>
            <div className="NftFiltrationTabs">
              <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab className="NftFiltrationTab" label="All items" {...a11yProps(0)} />
                    <Tab className="NftFiltrationTab" label="Art" {...a11yProps(1)} />
                    <Tab className="NftFiltrationTab" label="Game" {...a11yProps(2)} />
                    <Tab className="NftFiltrationTab" label="Photography" {...a11yProps(3)} />
                    <Tab className="NftFiltrationTab" label="Music" {...a11yProps(4)} />
                    <Tab className="NftFiltrationTab" label="Video" {...a11yProps(5)} />
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
                    <div className="NftFiltrationDropTitle">Recently added</div>
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
                    <div className="NftFiltrationCollapseDiv">No Data Available</div>
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
                            <div className="NftFiltrationPriceLimitMin">Min.</div>
                            <div className="NftFiltrationPriceLimitDivider"> -</div>
                            <div className="NftFiltrationPriceLimitMax">Max.</div>
                          </div>
                          <div className="NftFiltrationPriceLimitRight">
                            <KeyboardArrowRightIcon sx={{ color: 'black' }} fontSize="large" />
                          </div>
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
              <Box className="NftFiltrationDropDownBox">
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
              </Box>
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
                <div className="NftFiltrationResetIcon">
                  <CancelIcon sx={{ color: 'white' }} />
                </div>
                <div className="NftFiltrationResetText">Reset filter</div>
              </div>
            </div>
          )}
          <Box sx={{ width: showFilter ? '70%' : '100%' }}>
            <TabPanel value={value} index={0}>
              <Grid className="NftFiltrationGridContainer" container>
                {[...Array(15)].map(() => (
                  <Grid className="NftFiltrationGrid" md={showFilter ? 3.8 : 2.8}>
                    <NftCard />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid className="NftFiltrationGridContainer" container>
                {[...Array(4)].map(() => (
                  <Grid className="NftFiltrationGrid" md={showFilter ? 3.8 : 2.8}>
                    <NftCard />
                  </Grid>
                ))}
              </Grid>{' '}
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Grid className="NftFiltrationGridContainer" container>
                {[...Array(15)].map(() => (
                  <Grid className="NftFiltrationGrid" md={showFilter ? 3.8 : 2.8}>
                    <NftCard />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Grid className="NftFiltrationGridContainer" container>
                {[...Array(15)].map(() => (
                  <Grid className="NftFiltrationGrid" md={showFilter ? 3.8 : 2.8}>
                    <NftCard />
                  </Grid>
                ))}
              </Grid>{' '}
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Grid className="NftFiltrationGridContainer" container>
                {[...Array(15)].map(() => (
                  <Grid className="NftFiltrationGrid" md={showFilter ? 3.8 : 2.8}>
                    <NftCard />
                  </Grid>
                ))}
              </Grid>{' '}
            </TabPanel>
            <TabPanel value={value} index={5}>
              <Grid className="NftFiltrationGridContainer" container>
                {[...Array(15)].map(() => (
                  <Grid className="NftFiltrationGrid" md={showFilter ? 3.8 : 2.8}>
                    <NftCard />
                  </Grid>
                ))}
              </Grid>{' '}
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
