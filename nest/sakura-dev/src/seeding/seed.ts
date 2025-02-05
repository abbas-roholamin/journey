import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import { PropertyFactory } from './property.factory';
import { UserFactory } from './user.factory';
import { PropertyFeatureFactory } from './property-feature.factory';
import { MainSeeder } from './main';

import * as dotenv from 'dotenv';

dotenv.config();

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  port: +process.env.DATABASE_PORT,
  seeds: [MainSeeder],
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  factories: [UserFactory, PropertyFactory, PropertyFeatureFactory],
  logging: true,
};

const dataSource = new DataSource(options);
dataSource.initialize().then(async () => {
  await dataSource.synchronize(true);
  await runSeeders(dataSource);
  process.exit();
});
