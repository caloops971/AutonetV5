dmx.config({
  "index": {
    "repeatBrand": {
      "meta": [
        {
          "type": "text",
          "name": "Brand"
        },
        {
          "type": "text",
          "name": "brand_image_url"
        }
      ],
      "outputType": "array"
    }
  },
  "vehiclelisting": {
    "repeatVehicle": {
      "meta": [
        {
          "name": "VehicleID",
          "type": "number"
        },
        {
          "name": "Brand",
          "type": "text"
        },
        {
          "name": "Model",
          "type": "text"
        },
        {
          "name": "Tarif",
          "type": "number"
        },
        {
          "name": "Lieu",
          "type": "text"
        },
        {
          "name": "cm3",
          "type": "number"
        },
        {
          "name": "Puissance",
          "type": "text"
        },
        {
          "name": "Energie",
          "type": "text"
        },
        {
          "name": "Type_de_vehicule",
          "type": "text"
        },
        {
          "name": "Transmission",
          "type": "text"
        },
        {
          "name": "Carrosserie",
          "type": "text"
        },
        {
          "name": "Couleur",
          "type": "text"
        },
        {
          "name": "territoire",
          "type": "text"
        },
        {
          "name": "LowestPrice",
          "type": "number"
        }
      ],
      "outputType": "text"
    }
  }
});
