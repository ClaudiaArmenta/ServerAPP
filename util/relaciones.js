//funcion que recibe el objeto de conexion 
function applyRelations(sequelize){
    console.log(sequelize.models);

    const MonthlyDonation = sequelize.models.MonthlyDonation;
    const Donation = sequelize.models.Donation
    const Organization = sequelize.models.Organization;
    const User = sequelize.models.User;
    const Project = sequelize.models.Project;

    //Relacion 1:N 
    
    MonthlyDonation.belongsTo(User);
    User.hasMany(Project);

    Organization.hasMany(Project);

    User.hasMany(Donation);
}
module.exports ={applyRelations};
