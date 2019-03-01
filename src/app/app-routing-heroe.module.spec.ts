import { AppRoutingHeroeModule } from './app-routing-heroe.module';

describe('AppRoutingHeroeModule', () => {
  let appRoutingHeroeModule: AppRoutingHeroeModule;

  beforeEach(() => {
    appRoutingHeroeModule = new AppRoutingHeroeModule();
  });

  it('should create an instance', () => {
    expect(appRoutingHeroeModule).toBeTruthy();
  });
});
