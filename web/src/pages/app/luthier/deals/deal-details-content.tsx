import { Badge } from '@/components/ui/badge'

export function DealDetailsContent() {
  return (
    <div className="flex flex-col gap-4">
      <section>
        <h1 className="text-xl font-semibold leading-none tracking-tight">
          Sobre o Projeto
        </h1>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          Estamos buscando um luthier excepcional para a criação de um violão
          acústico personalizado que atenda às especificações únicas de nosso
          cliente. Este projeto é uma oportunidade de mostrar sua habilidade
          artesanal e criar um instrumento que não apenas soe incrível, mas
          também reflita a identidade musical de seu futuro proprietário.
        </p>
      </section>

      <section>
        <h1 className="text-xl font-semibold leading-none tracking-tight">
          Contexto Geral do Projeto
        </h1>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          Caro Matheus Silva, se você está interessado em assumir este desafio e
          tem a experiência necessária para criar um violão acústico que atenda
          às expectativas elevadas do nosso cliente, convidamos você a entrar em
          contato conosco. Este projeto não só permitirá que você demonstre sua
          habilidade e paixão pela luthieria, mas também fortalecerá sua
          reputação como um artesão de excelência na comunidade CraftedTunes.
          Estamos ansiosos para discutir os detalhes e iniciar esta parceria
          musical com você. Transforme a visão do nosso cliente em realidade com
          um instrumento único e personalizado.
        </p>
      </section>

      <section>
        <h1 className="text-xl font-semibold leading-none tracking-tight">
          Instrumento que Deseja Construir
        </h1>
        <ul className="mt-2">
          <li className="leading-relaxed text-muted-foreground">
            <strong>Descrição: </strong>{' '}
            <span>
              Violão acústico com detalhes personalizados, incluindo escolha de
              madeira, acabamento exclusivo e especificações técnicas alinhadas
              às necessidades do cliente.
            </span>
          </li>
          <li className="leading-relaxed text-muted-foreground">
            <strong>Prazo de entrega:</strong> <span>30 de agosto de 2024</span>
          </li>
          <li className="leading-relaxed text-muted-foreground">
            <strong>Orçamento</strong>{' '}
            <span className="text-emerald-500">R$ 5.000,00</span>
          </li>
        </ul>
      </section>

      <section>
        <h1 className="text-xl font-semibold leading-none tracking-tight">
          Habilidades necessárias
        </h1>
        <ul className="mt-4 flex gap-2 text-sm text-muted-foreground">
          <li>
            <Badge variant="outline">Violão</Badge>
          </li>
          <li>
            <Badge variant="outline">Classico</Badge>
          </li>
          <li>
            <Badge variant="outline">Madeira de Lei</Badge>
          </li>
          <li>
            <Badge variant="outline">Brilhantes</Badge>
          </li>
          <li>
            <Badge variant="outline">Violão</Badge>
          </li>
          <li>
            <Badge variant="outline">Classico</Badge>
          </li>
        </ul>
      </section>
    </div>
  )
}
