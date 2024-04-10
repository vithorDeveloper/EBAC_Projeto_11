import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import PostComments from "./components/PostComments"

describe("testes de comentarios", () => {

  test("renderizar comentarios corretamente", () =>{
    render(<App/>)
    expect(screen.getByText("Comentar"))
      .toBeInTheDocument()
  })

  test("adicionando primeiro comentário", () => {
    render(<PostComments />)

    fireEvent.change(screen.getByTestId("campoComentario"), {
      target:{
        value: "comentario 03"
      }
    })

    fireEvent.click(screen.getByTestId("addComentario"))
      expect(screen.getByText("comentario 03"))
        .toBeInTheDocument()
  })

  test("adicionando segundo comentário", () => {
    render(<PostComments />)

    fireEvent.change(screen.getByTestId("campoComentario"), {
      target:{
        value: "comentario 04"
      }
    })

    fireEvent.click(screen.getByTestId("addComentario"))
      expect(screen.getByText("comentario 04"))
        .toBeInTheDocument()
  })
})