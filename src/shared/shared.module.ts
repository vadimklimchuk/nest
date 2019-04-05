import { Module, Global } from "@nestjs/common";

import { MapperService } from "./mapper/mapper.service";
import { ConfigurationService } from "./configuration/configuration.service";

@Global()
@Module({
  providers: [
    ConfigurationService,
    MapperService,
  ],
  exports: [
    ConfigurationService,
    MapperService,
  ],
})
export class SharedModule {}
