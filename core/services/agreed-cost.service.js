const { NannyCostHourlyRepository } = require("../models/repositories");
const { ServiceTurn } = require("../../shared/utils/database-sequelize");
module.exports = {
	/**
      * Adds the attribute "ServiceTurnId" to the AgreedCosts making a query from the NannyCosHourly or contemplating the individual cases
	 * @param {Array} AgreedCosts  the array of Costs Containing the information
     * @returns {Array}  The Agreed Cost Array with the new Attribute based on conditions
     */
	addServiceTurnIdToAgreedCosts: async(AgreedCosts) => {
		const unexistentNannyCostHourlyIds = {
			// There were SeviceCostsId put with these values in case of urgent to have a turn
			MORNING: -1, //Mañana
			NIGHT: -2, //Noche
		};
        let arrayToReturn=[]

		for (let anAgreedCost of AgreedCosts) {
			if (!anAgreedCost.ServiceTurnId) {
                
				//In the future the ServiceTurnId will be get in the body so this will not be executed
				const { NannyCostHourlyId } = anAgreedCost;
				switch (NannyCostHourlyId) {
					case unexistentNannyCostHourlyIds.MORNING:
						anAgreedCost.ServiceTurnId = ServiceTurn.MORNING;
						break;
					case unexistentNannyCostHourlyIds.NIGHT:
						anAgreedCost.ServiceTurnId = ServiceTurn.NIGHT;
						break;

					default:
                        // Add the attribute via query
                        const aNannyCostHourly=await NannyCostHourlyRepository.getNannyCostHourlyById(NannyCostHourlyId);
                        anAgreedCost.ServiceTurnId =aNannyCostHourly.ServiceTurnId
						break;
				}
				
                
			}
            arrayToReturn.push(anAgreedCost)
		}
        return arrayToReturn;
	},
};
