const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#5644F6', // primary color for all components
              '@link-color': '5644F6', // link color
              '@success-color': '#6BD5A4', // success state color
              '@warning-color': '#F09B39', // warning state color
              '@error-color': '#DC5B59', // error state color
              '@font-size-base': '14px', // major text font size
              '@heading-color': '#828282', // heading text color
              '@text-color': '#828282', // major text color
              '@text-color-secondary': '#000000', // secondary text color
              '@disabled-color': '#BDBDBD', // disable state color
              '@border-radius-base': '8px', // major border radius
              '@border-color-base': '#d9d9d9', // major border color
              '@box-shadow-base': '0px 4px 8px rgba(0, 0, 0, 0.08)', // major shadow for layers
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
