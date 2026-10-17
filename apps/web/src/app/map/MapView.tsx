"use client";

import { useEffect, useRef } from "react";
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import styles from "./page.module.css";

type MapResource = {
  id: string;
  name: string;
  category: string;
  location: string;
  latitude: number;
  longitude: number;
};

type MapViewProps = { resources: MapResource[] };

const center: [number, number] = [101.6968, 3.1418];

export default function MapView({ resources }: MapViewProps) {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://tiles.openfreemap.org/styles/liberty",
      center,
      zoom: 13.5,
    });

    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");

    resources.forEach((resource) => {
      const marker = new maplibregl.Marker({ color: "#b4441e" })
        .setLngLat([resource.longitude, resource.latitude])
        .setPopup(
          new maplibregl.Popup({ offset: 24 }).setHTML(
            `<strong>${escapeHtml(resource.name)}</strong><br /><span>${escapeHtml(resource.location)}</span>`,
          ),
        )
        .addTo(map);

      marker.getElement().setAttribute("aria-label", resource.name);
      marker.getElement().setAttribute("title", resource.name);
    });

    return () => map.remove();
  }, [resources]);

  return (
    <div className={styles.mapFrame}>
      <div ref={mapContainer} className={styles.map} aria-label="Resource map" />
      <p className={styles.mapAttribution}>
        Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>
      </p>
    </div>
  );
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[
        character
      ] ?? character,
  );
}
