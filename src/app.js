App = {
  web3Provider: null,
  contracts: {},

  init: function () {
    return App.initWeb3();
  },

  initWeb3: function () {
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
    } else {
      // If no injected web3 instance is detected, fall back to Ganache
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    web3 = new Web3(App.web3Provider);
    return App.initContract();
  },

  initContract: function () {
    $.getJSON('ExperienceChain.json', function (data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      var ExpirienceChainArtifact = data;
      App.contracts.ExperienceChain = TruffleContract(ExpirienceChainArtifact);
      App.contracts.ExperienceChain.setProvider(App.web3Provider);

      // Use our contract to retrieve and mark the adopted pets

      App.contracts.ExperienceChain.deployed().then(r => {
        r.add_mentor()
          // r.add_skill('0x0d1d4e623d10f9fba5db95830f7d3839406c6af2', 456, 2).then(r2 => {
          //   r.get_employee_data('0x0d1d4e623d10f9fba5db95830f7d3839406c6af2', 456).then(r3 => {
          //     console.log(r3)
          //   })
          // })

        // })

      })
      // return App.markAdopted();
    });
  }

}

$(function () {
  $(window).load(function () {
    App.init();
  });
});