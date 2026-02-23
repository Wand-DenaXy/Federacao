from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import get_db, init_db
from models import (
    ClubeModel, ClubeCreate, ClubeResponse,
    JogadorModel, JogadorCreate, JogadorResponse,
    TipoUserModel, TipoUserCreate, TipoUserResponse,
    UtilizadorModel, UtilizadorCreate, UtilizadorResponse,
)

app = FastAPI(title="API Federação", description="API para gestão de clubes, jogadores e utilizadores")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def startup():
    init_db()


@app.get("/")
def root():
    return {"message": "API Federação", "docs": "/docs"}



@app.post("/clubes", response_model=ClubeResponse)
def create_clube(clube: ClubeCreate, db: Session = Depends(get_db)):
    db_clube = ClubeModel(**clube.dict())
    db.add(db_clube)
    db.commit()
    db.refresh(db_clube)
    return db_clube

@app.get("/clubes", response_model=list[ClubeResponse])
def list_clubes(db: Session = Depends(get_db)):
    return db.query(ClubeModel).all()

@app.get("/clubes/{clube_id}", response_model=ClubeResponse)
def get_clube(clube_id: int, db: Session = Depends(get_db)):
    clube = db.query(ClubeModel).filter(ClubeModel.id == clube_id).first()
    if not clube:
        raise HTTPException(status_code=404, detail="Clube não encontrado")
    return clube

@app.put("/clubes/{clube_id}", response_model=ClubeResponse)
def update_clube(clube_id: int, clube: ClubeCreate, db: Session = Depends(get_db)):
    db_clube = db.query(ClubeModel).filter(ClubeModel.id == clube_id).first()
    if not db_clube:
        raise HTTPException(status_code=404, detail="Clube não encontrado")
    for key, value in clube.dict().items():
        setattr(db_clube, key, value)
    db.commit()
    db.refresh(db_clube)
    return db_clube

@app.delete("/clubes/{clube_id}", status_code=204)
def delete_clube(clube_id: int, db: Session = Depends(get_db)):
    db_clube = db.query(ClubeModel).filter(ClubeModel.id == clube_id).first()
    if not db_clube:
        raise HTTPException(status_code=404, detail="Clube não encontrado")
    db.delete(db_clube)
    db.commit()
    return None



@app.post("/jogadores", response_model=JogadorResponse)
def create_jogador(jogador: JogadorCreate, db: Session = Depends(get_db)):
    db_jogador = JogadorModel(**jogador.dict())
    db.add(db_jogador)
    db.commit()
    db.refresh(db_jogador)
    return db_jogador

@app.get("/jogadores", response_model=list[JogadorResponse])
def list_jogadores(db: Session = Depends(get_db)):
    return db.query(JogadorModel).all()



@app.post("/tipouser", response_model=TipoUserResponse)
def create_tipouser(tp: TipoUserCreate, db: Session = Depends(get_db)):
    db_tp = TipoUserModel(**tp.dict())
    db.add(db_tp)
    db.commit()
    db.refresh(db_tp)
    return db_tp

@app.get("/tipouser", response_model=list[TipoUserResponse])
def list_tipouser(db: Session = Depends(get_db)):
    return db.query(TipoUserModel).all()



@app.post("/utilizador", response_model=UtilizadorResponse)
def create_utilizador(user: UtilizadorCreate, db: Session = Depends(get_db)):
    db_user = UtilizadorModel(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@app.get("/utilizador", response_model=list[UtilizadorResponse])
def list_utilizadores(db: Session = Depends(get_db)):
    return db.query(UtilizadorModel).all()