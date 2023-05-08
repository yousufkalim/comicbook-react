// Init
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
// import CancelIcon from '@mui/icons-material/Cancel';
import FilterHeader from '../common/FilterHeader';
import CollectionCard from './CollectionCard';
// Component

export default function CollectionFilter() {
  const [showFilter, setShowFilter] = useState(false);

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="NftFiltrationContainer">
      <FilterHeader
        title="Artwork collections"
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
                  label="Label"
                />
                <FormControlLabel
                  className="collectionFilterCheckboxLabel"
                  control={<Checkbox size="large" />}
                  label="Sales"
                />
                <FormControlLabel
                  className="collectionFilterCheckboxLabel"
                  control={<Checkbox size="large" />}
                  label="Has list Price"
                />
                <FormControlLabel
                  className="collectionFilterCheckboxLabel"
                  control={<Checkbox size="large" />}
                  label="Bids"
                />
                <FormControlLabel
                  className="collectionFilterCheckboxLabel"
                  control={<Checkbox size="large" />}
                  label="Has Open Offer"
                />
                <FormControlLabel
                  className="collectionFilterCheckboxLabel"
                  control={<Checkbox size="large" />}
                  label="Owned by creator"
                />
                <FormControlLabel
                  className="collectionFilterCheckboxLabel"
                  control={<Checkbox size="large" />}
                  label="Purchase"
                />
                <FormControlLabel
                  className="collectionFilterCheckboxLabel"
                  control={<Checkbox size="large" />}
                  label="Has Sold"
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
              {[...Array(4)].map(() => (
                <Grid className="NftFiltrationGrid" md={showFilter ? 5.8 : 3.8}>
                  <CollectionCard />
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}
