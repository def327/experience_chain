pragma solidity ^ 0.4 .18;

contract ExperienceChain {

    function ExperienceChain() {
        mentors_map[msg.sender] = true;
    }

    struct SkillData {
        address mentor_address;
        uint hour;
    }

    // map_1 : key = employee_id, value map_2 : key = skill_id, value = SkillData
    mapping(address => mapping(uint => SkillData)) employees_data_map;
    mapping(address => bool) mentors_map;


    /*** Test method***/
    function test() public returns(uint _value) {
        _value = 42;    
    }

    /*** MENTORS security ****/
    modifier onlyMentor {
        require(mentors_map[msg.sender] == true);
        _;
    }

    /****** CONTRACT FEATURES  *****/

    function add_mentor() onlyMentor {
        mentors_map[msg.sender] = true;
    }
    
    function add_skill(address _employee, uint _skill_id, uint _hour) public  {
        var skillData = SkillData({
            mentor_address: msg.sender,
            hour: _hour
        });
        employees_data_map[_employee][_skill_id] = skillData;
    }

    function get_employee_data(address employee_adress, uint skill_id) public view returns(uint _skill_id, address _mentor_address, uint _hour) {
        var skill_data = employees_data_map[employee_adress][skill_id];
        return (skill_id, skill_data.mentor_address, skill_data.hour);
    }
}