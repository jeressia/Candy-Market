
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using CandyMarket.Api.DataModels;
using CandyMarket.Api.Dtos;
using Dapper;

namespace CandyMarket.Api.Repositories
{
    public class CandyRepository : ICandyRepository
    {
        string _connectionString = "Server = localhost; Database=CandyMarket; Trusted_Connection=True;";

        public IEnumerable<Candy> GetAllCandy()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                db.Open();

                var allCandy = db.Query<Candy>("Select * from Candy");

                return allCandy.AsList();
            }
        }

        public bool AddCandy(AddCandyDto newCandy)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"INSERT INTO [dbo].[Candy]
                                        ([Name]
                                        ,[CandyTypeId])
                           VALUES
                                        (@Name
                                        ,@CandyTypeId)";

                return db.Execute(sql, newCandy) == 1;
            }
        }

        public bool EatCandy(int candyIdToDelete)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"delete
                            from Candy
                            where [Id] = @candyIdToDelete";

                return db.Execute(sql, new { candyIdToDelete }) == 1;
            }
        }
    }
}