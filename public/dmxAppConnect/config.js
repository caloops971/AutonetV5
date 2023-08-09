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
    },
    "dvVehicleData": {
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
          "name": "Kilometrage",
          "type": "text"
        },
        {
          "name": "Premiere_mise_en_circulation",
          "type": "text"
        },
        {
          "name": "Emissions_de_CO2_1",
          "type": "text"
        },
        {
          "name": "Energie",
          "type": "text"
        },
        {
          "name": "Vehicle_Image",
          "type": "text"
        },
        {
          "name": "LowestPrice",
          "type": "number"
        }
      ],
      "outputType": "text"
    }
  },
  "vehicledetails": {
    "query": [
      {
        "type": "text",
        "name": "id"
      },
      {
        "type": "text",
        "name": "model"
      }
    ]
  }
});
