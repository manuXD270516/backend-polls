const { mapperBanners } = require("../../shared/dtos/banner/banner.dto");
const AttributeMessageReplacement = require("../models/AttributeMessageReplacement");
const Banner = require("../models/Banner");
const BannerAction = require("../models/BannerAction");
const BannerBodyTypeWhatsApp = require("../models/BannerBodyTypeWhatsApp");
const Classifier = require("../models/Classifier");
const { NannyRepository, ParentsRepository, EmployeeRepository } = require("../models/repositories");
const BannerRepository = require("../models/repositories/banner.repository");
const UsersRepository = require("../models/repositories/users.repository");
const Users = require("../models/Users");
const getBannersWithActionData=async()=>{
return await BannerRepository.getBanners([
	{
		model: BannerAction,
		include: [
			{
				model: Classifier,
				as: "BannerActionType",
				attributes: ["ClassifierId", "Description"],
			},
			{
				model: BannerBodyTypeWhatsApp,
				include: [
					{
						model: AttributeMessageReplacement,
						include: {
							model: Classifier,
							as: "TableAttribute",
							attributes: [
								"ClassifierId",
								"Description",
								"ClassifierParentId",
							],

							include: {
								model: Classifier,
								as: "TableName",
								required: false,
							},
						},
					},
				],
			},
		],
	},
]);
}
const getUserWithSubTypesByPk=async(primaryKey)=>{
	
	const user=await UsersRepository.getUserById(primaryKey)
	if( user.NannyId!=null) return await NannyRepository.getNannyById(user.NannyId)
	if(user.ParentsId!=null) return await ParentsRepository.getParentById(user.ParentsId)
	if(user.ParentsId!=null) return await EmployeeRepository.getParentById(user.ParentsId)

}
module.exports = {
	BannerService: {
		/**
		 *
		 * @param {{userId:number,ParentsId:number}} data the data to be used inside Banners
		 * @param {*} dataToUseInBanners.userId the id of the user
		 */
		getAll: async (data) => {
			const destinationParent = await ParentsRepository.getParentById(data.ParentsId)
			const banners =await  getBannersWithActionData()
			
			const mappedBanners =  mapperBanners(banners,destinationParent);
			return mappedBanners;
		},
	},
};
