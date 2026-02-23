from datetime import datetime
from sqlalchemy import Column, Integer, String, DateTime, Text,ForeignKey
from pydantic import BaseModel
from sqlalchemy.orm import relationship
from database import Base


class ClubeModel(Base):
    __tablename__ = "clubes"

    id = Column(Integer, primary_key=True, autoincrement=True)
    nome = Column(String(100), nullable=False)
    email = Column(String(150), unique=True)
    telefone = Column(String(20))
    localidade = Column(String(100))
    anoF = Column(String(100))
    foto = Column(String(255))

    jogadores = relationship("JogadorModel", back_populates="clube")


class JogadorModel(Base):
    __tablename__ = "jogadores"

    num = Column(Integer, primary_key=True)
    nome = Column(String(100), nullable=False)
    email = Column(String(150), unique=True)
    idade = Column(Integer)
    morada = Column(String(200))
    tel = Column(String(20))
    foto = Column(String(255))
    idclube = Column(Integer, ForeignKey("clubes.id"))

    clube = relationship("ClubeModel", back_populates="jogadores")


class TipoUserModel(Base):
    __tablename__ = "tipouser"

    id = Column(Integer, primary_key=True, autoincrement=True)
    descricao = Column(String(100), nullable=False)

    utilizadores = relationship("UtilizadorModel", back_populates="tipo")


class UtilizadorModel(Base):
    __tablename__ = "utilizador"

    id = Column(Integer, primary_key=True, autoincrement=True)
    user = Column(String(50), nullable=False, unique=True)
    pw = Column(String(255), nullable=False)
    idtpuser = Column(Integer, ForeignKey("tipouser.id"))
    foto = Column(String(255))

    tipo = relationship("TipoUserModel", back_populates="utilizadores")




class ClubeCreate(BaseModel):
    nome: str
    email: str | None = None
    telefone: str | None = None
    localidade: str | None = None
    anoF: str | None = None
    foto: str | None = None


class ClubeResponse(ClubeCreate):
    id: int

    class Config:
        from_attributes = True


class JogadorCreate(BaseModel):
    num: int
    nome: str
    email: str | None = None
    idade: int
    morada: str | None = None
    tel: str | None = None
    foto: str | None = None
    idclube: int | None = None


class JogadorResponse(JogadorCreate):
    class Config:
        from_attributes = True


class TipoUserCreate(BaseModel):
    descricao: str


class TipoUserResponse(TipoUserCreate):
    id: int

    class Config:
        from_attributes = True


class UtilizadorCreate(BaseModel):
    user: str
    pw: str
    idtpuser: int
    foto: str | None = None


class UtilizadorResponse(UtilizadorCreate):
    id: int

    class Config:
        from_attributes = True
