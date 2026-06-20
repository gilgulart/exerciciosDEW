class Event{
    constructor(name, local, date, participants = []){
        this.name = name;
        this.local = local;
        this.date = date;
        this.participants = participants;
    }

    getParticipantsCount(){
        return this.participants.length;
    }

    hasParticipants(){
        return this.getParticipantsCount() > 0;
    }

    hasLocal(){
        return !!this.local;
    }

    displayEventInfo() {
        console.log(`Evento: ${this.name}\n`);
        
        if (this.hasLocal()) {
            console.log(`Local: ${this.local}\n`);
        }
        
        console.log(`Data: ${this.date.toLocaleDateString('pt-BR')}\n`);
        console.log(`Participantes: ${this.getParticipantsCount()}\n`);
        
        if (this.hasLocal()) {
            console.log(`Local cadastrado: ${this.hasLocal()}\n`);
            
        }
        
        if (!this.hasParticipants()) {
            console.log('Nenhum participante cadastrado');
            
        } 
    }

}

const semanaDaTecnologia = new Event("Semana da Tecnologia", "Auditório", new Date("2026-08-20"), ["Ana","Carlos","Marcos"]);
const workshop = new Event("Workshop Angular","Laboratório 5",new Date("2026-09-10"), []);

semanaDaTecnologia.displayEventInfo();
console.log("================================================");
workshop.displayEventInfo();
