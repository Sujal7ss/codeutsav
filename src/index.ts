import "./styles.css";
import { Viewer } from "@photo-sphere-viewer/core";
import { VirtualTourPlugin } from "@photo-sphere-viewer/virtual-tour-plugin";
import { GalleryPlugin } from "@photo-sphere-viewer/gallery-plugin";
import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";

const iconsUrl = "https://photo-sphere-viewer-data.netlify.app/assets/";
const caption = "";
const baseUrl = "https://strapi-dev.nkgroupofcompanies.com/uploads/";

const viewer = new Viewer({
  container: "viewer",
  // loadingImg: iconsUrl + "loader.gif",
  loadingImg: baseUrl + "nk_logo_028c9e16d7.png",
  touchmoveTwoFingers: true,
  mousewheelCtrlKey: true,
  defaultYaw: "0deg",
  navbar: "zoom move gallery caption fullscreen",
  defaultZoomLvl: 0,

  plugins: [
    MarkersPlugin,
    [
      GalleryPlugin,
      {
        thumbnailSize: { width: 100, height: 100 }
      }
    ],
    [
      VirtualTourPlugin,
      {
        positionMode: "manual",
        renderMode: "markers"
        // markerStyle: {
        //   element: null,
        //   image: iconsUrl + "pictos/pin-red.png"
        // }
      }
    ]
  ]
});

const virtualTour = viewer.getPlugin(VirtualTourPlugin);

const markerLighthouse = {
  id: "marker-1",
  image: iconsUrl + "pictos/pin-red.png",
  tooltip: "Cape Florida Light, Key Biscayne",
  size: { width: 32, height: 32 },
  //   position: { yaw: 0.12, pitch: 0.9 },
  position: { textureX: 2000, textureY: 1200 },
  anchor: "bottom center"
  // gps: [-81.569973, 25.766601]
};


virtualTour.setNodes(
  [
    {
      id: "1",
      panorama: "./Rooms/Room1.jpg",
      thumbnail: "./Rooms/PANO.jpeg",
      name: "One",
      caption: `[1] ${caption}`,
      markers: [markerLighthouse],
      links: [
        {
          nodeId: "2",
          position: {
            yaw: -0.15,
            pitch: -0.5
          }
          // markerStyle: {
          //   element: null,
          //   image: iconsUrl + "pictos/pin-red.png"
          // }
        }
      ]
    },
    {
      id: "2",
      panorama: "./Rooms/Room2.jpg",
      thumbnail: "./Rooms/Room2.jpg",
      name: "Two",
      caption: `[2] ${caption}`,
      links: [
        {
          nodeId: "3",
          position: { textureX: 1800, textureY: 1200 }
        },
        {
          nodeId: "7",
          position: { textureX: 2000, textureY: 1200 }
        }
      ]
    },
    {
      id: "3",
      panorama: "./Rooms/Room3.jpg",
      thumbnail: "./Rooms/Room3.jpg",
      name: "Three",
      caption: `[3] ${caption}`,
      links: [
        {
          nodeId: "5",
          position: { textureX: -625 textureY: 1100 }
        },{
          nodeId: "4",
          position: { textureX: -1100 textureY: 1100 }
        },{
          nodeId: "7",
          position: { textureX: 700 textureY: 1100 }
        },
        {
          nodeId: "2",
          position: { textureX: 900 textureY: 1100 }
        }
      ]
    },
    {
      id: "4",
      panorama: "./Rooms/Room4.jpg",
      thumbnail: "./Rooms/Room4.jpg",
      name: "Four",
      caption: `[4] ${caption}`,
      links: [
        {
          nodeId: "3",
          position: { textureX: 800 textureY: 1100 }
        }
      ]
    },
    {
      id: "5",
      panorama: "./Rooms/Room5.jpg",
      thumbnail: "./Rooms/Room5.jpg",
      name: "Four",
      caption: `[4] ${caption}`,
      links: [
        {
          nodeId: "6",
          position: { textureX: 900 textureY: 1100 }
        },
        {
          nodeId: "3",
          position: { textureX: 1200 textureY: 1100 }
        }
      ]
    },
    {
      id: "6",
      panorama: "./Rooms/Room6.jpg",
      thumbnail: "./Rooms/Room6.jpg",
      name: "Four",
      caption: `[4] ${caption}`,
      links: [
        {
          nodeId: "5",
          position: {
            yaw: 4.429,
            pitch: -0.343
          }
        }
      ]
    },
    {
      id: "7",
      panorama: "./Rooms/Room7.jpg",
      thumbnail: "./Rooms/Room7.jpg",
      name: "Four",
      caption: `[4] ${caption}`,
      links: [
        {
          nodeId: "8",
          position: { textureX: 1200 textureY: 1100 }
        },{
          nodeId: "9",
          position: { textureX: 1800 textureY: 1100 }
        },{
          nodeId: "3",
          position: { textureX: -600 textureY: 1100 }
        }
      ]
    },
    {
      id: "8",
      panorama: "./Rooms/Room8.jpg",
      thumbnail: "./Rooms/Room8.jpg",
      name: "Four",
      caption: `[4] ${caption}`,
      links: [
        {
          nodeId: "9",
         
            position: { textureX: 1200 textureY: 1100 }
          
        }
      ]
    },
    {
      id: "9",
      panorama: "./Rooms/Room9.jpg",
      thumbnail: "./Rooms/Room9.jpg",
      name: "Four",
      caption: `[4] ${caption}`,
      links: [
        {
          nodeId: "7",
          position: { textureX: 1500 textureY: 1100 }
        }
      ]
    }
  ],
  "1"
);
