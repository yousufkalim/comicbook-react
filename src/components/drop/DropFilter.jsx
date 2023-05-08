// Init
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
// import CancelIcon from '@mui/icons-material/Cancel';
import FilterHeader from '../common/FilterHeader';
import NftCard from '../common/NftCard';
// import CollectionCard from './CollectionCard';
// Component

export default function DropFilter() {
  const [showFilter, setShowFilter] = useState(false);

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="NftFiltrationContainer">
      <FilterHeader
        title="Drops"
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
        </div>
        <div className="NftFiltrationMainDiv">
          {showFilter && (
            <div className="NftFiltrationSideDiv NftFilterBorder">
              <div className="collectionFilterCheckboxDiv">
                <FormControlLabel
                  className="collectionFilterCheckboxLabel"
                  control={<Checkbox size="large" />}
                  label="Minting Soon 16"
                />
                <FormControlLabel
                  className="collectionFilterCheckboxLabel"
                  control={<Checkbox size="large" />}
                  label="Now Minting 1526"
                />
                <FormControlLabel
                  className="collectionFilterCheckboxLabel"
                  control={<Checkbox size="large" />}
                  label="Minted Out 319"
                />
                <FormControlLabel
                  className="collectionFilterCheckboxLabel"
                  control={<Checkbox size="large" />}
                  label="Revealed 1209"
                />
              </div>
              <div className="collectionFilterDivider" />
              <div className="collectionFilterBtnDiv">
                <div className="collectionFilterSelectBtn">Select All</div>
                <div className="collectionFilterUnselectBtn">Unselect All</div>
              </div>
            </div>
          )}
          <Box sx={{ width: showFilter ? '70%' : '100%', marginTop: '1%' }}>
            <Grid className="NftFiltrationGridContainer" container>
              {[...Array(14)].map(() => (
                <Grid className="NftFiltrationGrid" md={showFilter ? 3.8 : 2.8}>
                  <NftCard />
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}
