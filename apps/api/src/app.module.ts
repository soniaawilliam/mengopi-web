import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { EventsController } from "./events.controller";
import { PriceEvidenceController } from "./price-evidence.controller";
import { ResourcesController } from "./resources.controller";

@Module({
  controllers: [
    AppController,
    EventsController,
    PriceEvidenceController,
    ResourcesController,
  ],
})
export class AppModule {}
