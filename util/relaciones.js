//funcion que recibe el objeto de conexion 
function applyRelations(sequelize){
    console.log(sequelize.models);

    const User = sequelize.models.User;
    const MonthlyDonation = sequelize.models.MonthlyDonation;
    const Donation = sequelize.models.Donation
    const Organization = sequelize.models.Organization;
    const UserData = sequelize.models.UserData;

    //Relacion 1:N 
    UserData.hasMany(Donation);
    MonthlyDonation.belongsTo(UserData);
}
module.exports ={applyRelations};
