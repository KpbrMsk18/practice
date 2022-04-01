import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Hero: { }
};

const pluralNames = {
  Hero: 'Heroes'
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
