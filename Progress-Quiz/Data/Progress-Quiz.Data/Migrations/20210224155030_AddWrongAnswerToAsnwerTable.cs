using Microsoft.EntityFrameworkCore.Migrations;

namespace Progress_Quiz.Data.Migrations
{
    public partial class AddWrongAnswerToAsnwerTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "WrongAnswer",
                table: "Answers",
                type: "nvarchar(20)",
                maxLength: 20,
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "WrongAnswer",
                table: "Answers");
        }
    }
}
