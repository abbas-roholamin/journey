import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { PropertyFeature } from '../property/entities/property-feature.entity/property-feature.entity';
import { User } from '../property/entities/user.entity/user.entity';
import { Property } from '../property/entities/property.entity';

export class MainSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    console.log('Running main seeder...');
    try {
      const userFactory = await factoryManager.get(User);
      const propertyFeature = await factoryManager.get(PropertyFeature);
      const propertyFactory = factoryManager.get(Property);

      const properties = await Promise.all(
        Array(50)
          .fill('')
          .map(async () => {
            const property = await propertyFactory.make({
              user: await userFactory.save(),
              features: await propertyFeature.save(),
            });
            return property;
          }),
      );

      const propertyRepo = await dataSource.getRepository(Property);

      console.log('Done!');
      return propertyRepo.save(properties);
    } catch (error) {
      console.log(error);
    }
  }
}
